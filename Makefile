.PHONY: help dev build typecheck lint preview clean

SERVICE = frontend

help:
	@echo "$(SERVICE) — локальная разработка"
	@echo ""
	@echo "  make dev        Dev-сервер Vite (http://localhost:5173)"
	@echo "  make build      Production-сборка (dist/)"
	@echo "  make typecheck  Проверка TypeScript"
	@echo "  make lint       ESLint"
	@echo "  make preview    Превью production-сборки"
	@echo "  make clean      Удалить dist/ и node_modules/"
	@echo ""
	@echo "Docker-запуск всей системы — из корня: make up-build"

dev:
	npm run dev

build:
	npm run build

typecheck:
	npm run typecheck

lint:
	npm run lint

preview:
	npm run preview

clean:
	rm -rf dist node_modules
