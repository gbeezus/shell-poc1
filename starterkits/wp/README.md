# Headless WordPress Starter Kit

Guide to using `nextjs-project` and Gesso for React for a headless WordPress site.

## Initial Setup
1. Follow the steps in the README at the base of the repo.
2. Run `ddev start`
3. Run `ddev setup-wp`. (This only has to be done once by whoever is first setting up the repo.)
4. Copy `.env.local.example` to `.env.local`
5. Install the [Faust.js WordPress plugin](https://wordpress.org/plugins/faustwp/).
6. Fill in the variables in the .env.local file with the information needed to connect to WordPress.
7. Make sure WordPress is running and `ddev restart`.

## WordPress Setup
Updating wordpress-project to support headless WordPress is still to come. In the 
meantime, you can install the [WordPress-Faust example project](https://github.com/forumone/wordpress-faustjs-project), and the `.env.local`
defaults are set to connect to it. This starter kit assumes that WP has a custom block
called `CustomBlockLibraryPostSelector` which has the property `post` (a Post).

## Headless WordPress Starter Kit
Running `ddev setup-wp` initially adds the required npm packages, tooling, and initial templates
for the basic WordPress content types: Page and Post. 

### Utility functions
WordPress-specific utility functions are already in the `util` directory, in the `wp` subdirectory.

### Examples
Example components and templates can be found in `starterkits/wp/examples`. Within that directory,
the files are located where they would be under `app` (so a file that would go in `app/_content` is in
`examples/_content`). The examples include comments to help explain how they work.

## GraphQL Types
Types for GraphQL queries and fragments are auto-generated. Settings for the GraphQL Codegen are in
the `codegen.ts` file that is copied to the root of your project during setup. Any time you make a change
to a query or fragment, run `ddev frontend generate` to regenerate the types. Note that to generate the
types, the container running Next.js must be able to connect to the WordPress site, so your project will need
to be running and the environment variables entered in your .env.local file.

Any queries and fragments need to be wrapped in the `gql` function (from `@apollo/client`) in order to be recognized
and typed correctly. See the examples in the starting templates and in `starterkits/wp/examples`.
