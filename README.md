Prop style server/client mismatch for browser-prefixed attributes

**The problem**

When server rendering RNW in a repository that also uses `@storybook/react`, there a are mismatches between server and client. The differences appear to be a different sort of attributes for the element.

**How to reproduce**

Simplified test case: https://github.com/HealthTeacher/rnw-server-style-mismatch

Steps to reproduce:
1. Clone the test case.
1. `yarn install`
1. `yarn dev`
1. Visit the application in a browser.

**Expected behavior**

The server and client renderings match. Specifically, the `style` prop matches. The sort order for browser-prefixed attributes matches between server and client.

**Environment (include versions). Did this work in previous versions?**

* React Native for Web (version): 0.9.0
* React (version): 16.5.2
* Browser: n/a

**Notes**

* This only appears to happen when `@storybook/react` is a part of the repository.
* It doesn't matter if `@storybook/react` is actually used.
* There are warnings from Yarn regarding `@storybook/react` and unmet dependency versions.
* Specific order of component rendering and styles can impact whether or not this bug shows up. The test case includes a commented example.
