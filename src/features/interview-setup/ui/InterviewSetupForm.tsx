import { useState } from 'react';
import { PrimaryButton } from '@shared/ui/primary-button';
import { SelectField } from '@shared/ui/select-field';
import {
  sphereOptions,
  directionOptionsBySphere,
  specialtyOptions,
  gradeOptions,
} from '../model/options.data';

export function InterviewSetupForm() {
  const [sphere, setSphere] = useState('');
  const [direction, setDirection] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [grade, setGrade] = useState('');

  const directionOptions = sphere ? directionOptionsBySphere[sphere] : undefined;
  const isReady = Boolean(sphere && direction && specialty && grade);

  const handleSphereChange = (value: string) => {
    setSphere(value);
    setDirection('');
    setSpecialty('');
    setGrade('');
  };

  const handleDirectionChange = (value: string) => {
    setDirection(value);
    setSpecialty('');
    setGrade('');
  };

  const handleSpecialtyChange = (value: string) => {
    setSpecialty(value);
    setGrade('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <SelectField
          label="Сфера"
          placeholder="Выберите сферу"
          options={sphereOptions}
          value={sphere}
          onChange={handleSphereChange}
          name="sphere"
        />
        <SelectField
          label="Направление"
          placeholder={sphere ? 'Выберите направление' : 'Сначала выберите сферу'}
          options={directionOptions}
          value={direction}
          onChange={handleDirectionChange}
          disabled={!sphere}
          name="direction"
        />
        <SelectField
          label="Специальность"
          placeholder={
            direction ? 'Выберите специальность' : 'Сначала выберите направление'
          }
          options={specialtyOptions}
          value={specialty}
          onChange={handleSpecialtyChange}
          disabled={!direction}
          name="specialty"
        />
        <SelectField
          label="Уровень (грейд)"
          placeholder={
            specialty ? 'Выберите уровень' : 'Сначала выберите специальность'
          }
          options={gradeOptions}
          value={grade}
          onChange={setGrade}
          disabled={!specialty}
          name="grade"
        />
      </div>

      <PrimaryButton type="submit" disabled={!isReady} className="w-full font-bold">
        Перейти к тесту
        <img
          src="/arrow-sideways.svg"
          alt=""
          width={16}
          height={16}
          aria-hidden="true"
          className="h-4 w-4 shrink-0"
        />
      </PrimaryButton>
    </form>
  );
}
