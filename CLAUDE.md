## Project Overview

This document describes the intended design and constraints of the project,
including parts that may not yet be implemented.

This project is a personal, long-term static technical blog built with Svelte
and generated using static site generation (SSG).

The site hosts public-facing personal learning notes, technical write-ups,
and reflections on software engineering practices.

Content is authored as Markdown (`.md`) files and rendered via a custom
Svelte-based template system. Markdown files are the primary, long-lived
unit of content.

The project prioritizes long-term stability and maintainability.
Changes should favor backward compatibility and avoid unnecessary disruption.

Non-goals:
- SaaS
- Commenting or community platform
- SEO tricks, growth hacks, or monetization

## How to Work in This Repo

This is a single-author project. Changes should be made with care and a
long-term mindset.

Both small, incremental changes and larger refactors are acceptable,
depending on the task. Refactors should only be performed when they are
directly related to the problem being addressed.

When making changes, prioritize in this order:
1. Simplicity and readability
2. Decoupling and sound design principles (SOLID, DRY, KISS)
3. Long-term maintainability
4. Consistency with existing patterns 

The goal is clear, understandable code over clever or overly abstract
solutions.

When information is missing or ambiguous, prefer asking before deciding.
If proceeding is reasonable, follow existing patterns and make conservative
assumptions.

### Tooling

- Using Svelte MCP is allowed and encouraged when it improves correctness,
  consistency with Svelte/SvelteKit best practices, or implementation clarity
- MCP usage should follow existing project constraints and architecture
- MCP should not be used to introduce new dependencies, change routing, or
  violate other rules in this document

## Coding Standards

### Languages
- Primary stack: Svelte with TypeScript
- Additional formats: Markdown (content), CSS
- Plain JavaScript may be used only when appropriate for static behavior

### TypeScript & Code Correctness
- Prefer TypeScript everywhere
- Use strict typing; avoid `any`
- Prefer explicit types over implicit ones
- Catch errors early through types rather than runtime checks

### Svelte & Component Code
- Components should be simple, readable, and focused
- Prefer clear data flow over clever abstractions
- Decouple logic where it improves clarity and maintainability

### Markdown
- Markdown files are content only
- Do not auto-rewrite, reformat, or stylistically “improve” Markdown
- Preserve author tone and structure exactly

### CSS & Styling
- Use modern CSS only (flexbox, grid, modern selectors)
- Avoid legacy hacks or unnecessary complexity
- Prefer component-scoped styles
- Global styles are acceptable when they are clearly reusable
- The site should have a consistent, general layout

## Architecture & Key Decisions

This project uses SvelteKit with static site generation (SSG).

Architecture is intentional and should be preserved over time. Changes to
the overall structure should be made carefully and with clear justification.

### Content vs Presentation
- Markdown (`.md`) files are treated as pure content
- Svelte components and layouts define presentation and site structure
- Content should not contain presentation logic

### Content Pipeline
- Markdown parsing and transformation happen at build time
- A dedicated content layer is responsible for loading and parsing content
- Routes/pages should remain thin and delegate content logic to this layer

### Layout & Components
- Layouts and reusable components define the overall structure of the site
- Page-level code should be minimal and focused on composition
- Shared behavior belongs in layouts or components, not individual pages

### Folder Structure
- The folder structure follows SvelteKit best practices
- Structure is guidance rather than a rigid rule and may evolve as needed

## Testing & Validation

This project does not currently use automated tests.

Validation is primarily manual and focused on ensuring the site builds
correctly and remains stable over time.

Before considering changes complete:
- The static site generation (SSG) build must succeed without errors
- No build-time warnings or failures should be introduced

Given the long-term nature of the project, changes should be made
conservatively and validated through successful builds rather than
extensive test suites.

## Things You Must NOT Do

The following rules are strict and should not be violated:

- Do not rewrite, reformat, or stylistically modify Markdown (`.md`) posts
- Do not add new dependencies without explicit approval
- Do not change routing or URL structure (slugs)
- Do not introduce runtime-only dependencies or behavior that breaks static site generation

## When You Are Unsure

When faced with ambiguity or missing information, combine asking clarifying
questions with taking conservative action.

If it is necessary to proceed without waiting for an answer:
- Prefer consistency with existing patterns and established best practices

Do not guess or invent undocumented behavior. When in doubt, choose the
simplest option that aligns with the current structure of the project.
