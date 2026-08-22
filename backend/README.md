# AUREA Backend

Django REST API for the AUREA chalet catalog.

## Local setup

```powershell
uv sync
uv run python manage.py migrate
uv run python manage.py seed_catalog
uv run python manage.py runserver
```

Copy `.env.example` to `.env` and set `DATABASE_URL` for Supabase. The settings file loads `.env` locally and uses SQLite only when no database URL is available or when running tests.

## Render deployment

Set the service root directory to `backend`.

Build command:

```text
pip install uv && uv sync --frozen
```

Start command:

```text
uv run gunicorn config.wsgi:application --bind 0.0.0.0:$PORT
```

After the first deploy, run these commands once in the Render shell:

```text
uv run python manage.py migrate
uv run python manage.py collectstatic --noinput
uv run python manage.py seed_catalog
```

Configure the variables from `.env.example` in the Render dashboard. Never commit the real `.env` file.
