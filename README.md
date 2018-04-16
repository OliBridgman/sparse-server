# Sparse

## Requirements

node  
postgres

## Setup

1.  Install dependencies:

    * `yarn install`

2.  Setup the database:

    * `createdb sparse_dev`
    * `psql sparse_dev < sql/schema.up.sql`

3.  Setup the environment:

    * `cp .env.example .env`
    * Replace the values in `.env` with your credentials
