# CidadeAtiva

Plataforma de gestão urbana e solicitações públicas desenvolvida com Angular, Spring Boot e integração via webhooks.

---

## Visão Geral

O CidadeAtiva é um projeto criado para simular uma plataforma moderna de gestão pública municipal.

A aplicação permite o recebimento e gerenciamento de solicitações urbanas através de formulários integrados via webhook, oferecendo um painel administrativo para acompanhamento e análise das demandas.

---

## Arquitetura

```txt
Cidadão
   ↓
Formulário Tally
   ↓ webhook
API Spring Boot
   ↓
PostgreSQL
   ↓
Dashboard Angular
```

---

## Tecnologias

### Frontend
- Angular
- TypeScript
- SCSS
- ZardUI
- Chart.js

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- PostgreSQL

### Integrações
- Tally Webhooks
- REST API

---

## Funcionalidades

- Cadastro de solicitações urbanas
- Dashboard administrativo
- Integração via webhook
- Gerenciamento de status
- Métricas administrativas
- Persistência em banco de dados
- Layout responsivo

---

## Roadmap

- [x] Estrutura inicial do projeto
- [ ] Integração webhook
- [ ] Dashboard administrativo
- [ ] Persistência PostgreSQL
- [ ] Gráficos e métricas
- [ ] Upload de imagens
- [ ] Autenticação
- [ ] Deploy

---

## Objetivo

Este projeto foi criado com foco em:

- Arquitetura corporativa
- Integração frontend/backend
- Desenvolvimento de dashboards
- Fluxos administrativos públicos
- APIs REST
- Angular + Spring Boot

---

## Autor

Milton Neves
