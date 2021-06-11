# Simple ManyToMany Properties on an Entity - code sample

Part of a personal [list](https://github.com/audiBookning/samples-code-ressource-list) of random samples code

- [NestS](https://nestjs.com/)

- [TypeORM](https://typeorm.io/#/)

- [PostgreSQL](https://www.postgresql.org/)

## Entities Relations

- A central `Client` entity

- various "properties" entities

  - `Email`

  - `Phone`

  - `Property` - With address, zip code, etc

  - `Websites`

- Each Client can have multiples "properties". For example a client can have multiple emails, websites, etc

- Each "properties" can belong to multiples Clients. For example an Email could have belong to different clients. That means that a client could have been the owner of an email from some start date to another end date. After that he could have another completely unrelated email. And this also means that his old email could be owned by another client in the future.

## Notes

- The purpose of this sample is more to illustrate the concept for inexperienced devs. "Copy pasting" this will not really help save any time.

- Uses `.env.development` for config the dev environment variables.

- Has a docker-compose file for ease of "testing". See the `docker.env` file for the DB config

- Use `docker-compose up` to run the containers.

- Has a `RepoService` that joins all the entities repository for the sake of pure laziness.

- use `createQueryBuilder` for getting the many to many props.

## TODOS

- Most of the client and props routing and associated service/repo methods

- No restraints that avoid the same prop belonging to different client at the same time or on the same range of time.

- Better types for the start and end dates

- No tests

- better managment of errors and exceptions

- add log system

- Better validation

- Nested saving of related entity should be simplified and should be done in one transaction

## BuyMeACoffee

<a href="https://www.buymeacoffee.com/audiobookning" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## Disclaimer

This code is not and will never be maintained. It is just some random sample code.

Feel free to copy and make any change you like.

##

License
ISC © 2021 AudiBookning
