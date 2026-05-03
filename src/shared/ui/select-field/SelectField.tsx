import { useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Text } from '@shared/ui/typography';

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  placeholder: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
};

const DROPDOWN_MAX_HEIGHT = 280;
const DROPDOWN_GAP = 8;
const DROPDOWN_OPTION_HEIGHT = 54;
const DROPDOWN_BORDER = 2;

export function SelectField({
  label,
  placeholder,
  options = [],
  value = '',
  onChange,
  disabled = false,
  name,
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [dropDirection, setDropDirection] = useState<'down' | 'up'>('down');
  const labelId = useId();
  const buttonId = useId();
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);

  const selectedIndex = options.findIndex((opt) => opt.value === value);
  const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : null;
  const getOptionId = (index: number) => `${listboxId}-option-${index}`;
  const activeOptionId =
    isOpen && highlightedIndex >= 0 && highlightedIndex < options.length
      ? getOptionId(highlightedIndex)
      : undefined;

  const updateDropDirection = () => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const contentHeight = Math.min(
      options.length * DROPDOWN_OPTION_HEIGHT + DROPDOWN_BORDER,
      DROPDOWN_MAX_HEIGHT,
    );
    const required = contentHeight + DROPDOWN_GAP;
    setDropDirection(
      spaceBelow < required && spaceAbove > spaceBelow ? 'up' : 'down',
    );
  };

  useLayoutEffect(() => {
    if (!isOpen) return;
    updateDropDirection();
    const handle = () => updateDropDirection();
    window.addEventListener('resize', handle);
    window.addEventListener('scroll', handle, true);
    return () => {
      window.removeEventListener('resize', handle);
      window.removeEventListener('scroll', handle, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0) {
      optionRefs.current[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [isOpen, highlightedIndex]);

  useEffect(() => {
    optionRefs.current.length = options.length;
  }, [options.length]);

  const open = () => {
    if (disabled || options.length === 0) return;
    setIsOpen(true);
    setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
  };

  const close = () => {
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const select = (option: SelectOption) => {
    onChange?.(option.value);
    close();
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (!isOpen) {
      if (
        event.key === 'ArrowDown' ||
        event.key === 'ArrowUp' ||
        event.key === 'Enter' ||
        event.key === ' '
      ) {
        event.preventDefault();
        open();
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        close();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setHighlightedIndex((i) => Math.min(i + 1, options.length - 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setHighlightedIndex((i) => Math.max(i - 1, 0));
        break;
      case 'Home':
        event.preventDefault();
        setHighlightedIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setHighlightedIndex(options.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          select(options[highlightedIndex]);
        }
        break;
      case 'Tab':
        close();
        break;
      default:
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className={'flex flex-col gap-2 ' + (disabled ? 'opacity-40' : '')}
    >
      <Text variant="label" tone="muted" as="span" id={labelId}>
        {label}
      </Text>

      <div className="relative">
        <button
          ref={buttonRef}
          type="button"
          role="combobox"
          id={buttonId}
          disabled={disabled}
          onClick={() => (isOpen ? close() : open())}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-labelledby={labelId}
          aria-activedescendant={activeOptionId}
          className={
            'flex h-[58px] w-full items-center justify-between gap-3 rounded-[14px] border border-stroke bg-input ' +
            'px-[25px] font-manrope text-body-l text-primary ' +
            'transition-colors duration-200 ' +
            'not-disabled:hover:border-primary/20 ' +
            'focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/35 ' +
            'disabled:cursor-not-allowed'
          }
        >
          <span className="truncate text-left">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <img
            src="/arrow.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
            className={
              'h-5 w-5 shrink-0 transition-transform duration-200 ' +
              (isOpen ? 'rotate-180' : '')
            }
          />
        </button>

        {isOpen && options.length > 0 && (
          <ul
            id={listboxId}
            role="listbox"
            aria-labelledby={labelId}
            tabIndex={-1}
            style={{
              maxHeight: DROPDOWN_MAX_HEIGHT,
              [dropDirection === 'up' ? 'marginBottom' : 'marginTop']: DROPDOWN_GAP,
            }}
            className={
              'absolute left-0 right-0 z-20 overflow-y-auto ' +
              'rounded-[14px] border border-stroke bg-card ' +
              'shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] ' +
              (dropDirection === 'up' ? 'bottom-full' : 'top-full')
            }
          >
            {options.map((opt, index) => (
              <li
                key={opt.value}
                id={getOptionId(index)}
                ref={(el) => {
                  optionRefs.current[index] = el;
                }}
                role="option"
                aria-selected={opt.value === value}
                onClick={() => select(opt)}
                onMouseEnter={() => setHighlightedIndex(index)}
                style={{ height: DROPDOWN_OPTION_HEIGHT }}
                className={
                  'flex cursor-pointer items-center px-6 font-manrope text-body-m text-primary ' +
                  'transition-colors duration-150 ' +
                  (highlightedIndex === index ? 'bg-input ' : '')
                }
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {name ? <input type="hidden" name={name} value={value} /> : null}
    </div>
  );
}
