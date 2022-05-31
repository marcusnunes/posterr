# Posterr

Posterr is very similar to Twitter, but with fewer features.

### Getting started

```bash
yarn && yarn dev
# or
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. That's it!

### Cool stuff
Lint
```bash
yarn lint
# or
npm run lint
```

Unit Tests
```bash
yarn test
# or
npm run test
```

E2E Tests
```bash
yarn cypress
# or
npm run cypress
```

### Technologies

- Next.js / React.js
- Styled Components
- SWR
- Next Translate

### Planning

The Product Manager wants to implement a new feature called "reply-to-post". 
##### Questions:

- Do we already have the design of these scenarios?
- What are the new fields I need to send to the backend?
- How does the backend return the data for this new post type?
- Do we have any api to search for usernames?
- Do we have any rules for tagging users? Any markup limits?

##### How I would solve this problem?

- Add a listener for the "@" character
- Fetch users that match what is being typed using regex
- Would add a debounce in the users search
- Notify the user in real time with websockets
### Critique

What could have been improved with more time?

- Finish the core features (follow user, reply, mentions and quotes).
- Would separate the logic of the components with custom hooks.
- Fix some bugs.
- Add redux to manage state.
- Add more unit tests and E2E.
- Implement Server Side Rendering.

What about scaling?

- The list of posts I'm following would be the first thing to give trouble. Ideally, the API should bring these results to remove all the filter logic from the frontend.
- Using localstorage to store posts is not ideal.
- Would add some pagination too.
