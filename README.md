# Based on

https://www.freecodecamp.org/news/build-a-developer-blog-from-scratch-with-gatsby-and-mdx/

# MDX

- Put a space between the key and value:
  categories:[bla] does not work
  categories: [bla] works

# Installs

## Not working for now, try to make it work later...

https://github.com/sw-yx/netlify-plugin-a11y/issues/3
Test netlify builds locally, to catch errors locally

- ONCE: npm install @netlify/build -g
- cd src && netlify-build

# Decision Log



The names of the files are annoying... I'm just going to number them and if there is a TIl to put in the middle, I'll just make a script or something to fix them...

I'm going to write titles to fit with TIL. Like "TIL how to add numbers in JS".

I left the css that came with Gatsby and changed the background. Maybe there's something interesting there.
I'm also reusing the Tailwind CSS theme. Styled components looks cleaner, but Tailwind seems more readable and practical. Going to give a try to styled
components.

I'm using styled components. The way to apply the theme seems a bit worse than what material-ui is using but having the styled components in the code is nice.
I need to jump a bit between the main component and the part where the styles are. It's OK, not sure if I prefer it like this or like Tailwind CSS.
