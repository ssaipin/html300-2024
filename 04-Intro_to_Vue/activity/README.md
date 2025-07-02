# Activity 07 - Vue Forms

We will converting the previous jQuery form to a Vue one using Vue CLI.

### Bootstrap/Vue References

- [Adding Bootstrap to Vue CLI](https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0)
- [Bootstrap Vue](https://bootstrap-vue.js.org/docs/)
- [Bootstrap Docs](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [Bootstrap Forms](https://getbootstrap.com/docs/4.0/components/forms/)
- [Bootstrap with Sass](https://getbootstrap.com/docs/4.3/getting-started/theming/#sass)
- [Bootstrap Tooltips](https://getbootstrap.com/docs/4.3/components/tooltips/)
- [Vue Docs](https://vuejs.org/v2/guide/)
- [Vue CLI](https://cli.vuejs.org/)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

#### Review the Vue videos in Lesson07

### To get started:

-     Install the Vue CLI if you haven't already with `npm install -g @vue/cli`
  -     If installed correctly, running `vue --version` should return a number
  - Use version number to determine npm installation process or reference <https://cli.vuejs.org/guide/>

## Install Node Dependencies

### **To create your project using Vue CLI v5 and make compatible with Vue 3**

- run `vue create my-title`

  - Choose 1st option (default)
  - Once done, `cd` into your project
  -     Installing scss (in your project directory)
    - npm command: run `npm install -D sass-loader sass`
    - yarn command: run `yarn add sass-loader sass`
  - Installing Bootstrap (in your project directory)
    - npm command: run `npm install bootstrap bootstrap-vue-next jquery popper.js`
    - yarn command: run `yarn add bootstrap bootstrap-vue-next jquery popper.js`
  - Adding bootstrap/scss to the project

    - In your `src` folder, create a `main.scss` file
    - In that new file, add the following:
      ```
      @import 'bootstrap/scss/bootstrap';
      @import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
      ```
    - You can create & import partials into this file or add additional global styles using scss
    - Also in your `src` folder, open `main.js` and refactor the code to import `bootstrap-vue-next` and make it available to the Vue app (example below or reference Bootstrap Documentation: <https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs.html>):

      ```
      import { createApp } from "vue";
      import { createBootstrap } from "bootstrap-vue-next";
      import App from "./App.vue";

      // Import Bootstrap and BootstrapVue CSS files (order is important)
      import "bootstrap/dist/css/bootstrap.css";
      import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
      import "./main.scss";

      const app = createApp(App);
      app.use(createBootstrap());
      app.mount("#app");
      ```

    - You now have access to scss and all of bootstrap/bootstrap-vue. Watch the screencast for more information on using bootstrap-vue components and bootstrap features in Vue, as well as turning the bootstrap nav into an app router

  - To run the project, ensure your terminal is pointed at your project (`cd` to the Vue project, e.g. `my-title`) and run `npm run serve` or `yarn serve` to launch the server

### **To create your project using Vue CLI v3**

    -	run `vue create my-title`
    -	Choose 1st option (default)
    -	Once done, `cd` into your project
    - 	Installing scss (in your project directory)
    	-	npm command: run `npm install -D sass-loader sass`
    	-	yarn command: run `yarn add sass-loader sass`
    -	Installing Bootstrap (in your project directory)
    	-	npm command: run `npm install bootstrap-vue bootstrap jquery popper.js`
    	-	yarn command: run `yarn add bootstrap-vue bootstrap jquery popper.js`
    -	Adding bootstrap/scss to the project
    	-	In your `src` folder, create a `main.scss` file
    	-	In that new file, add the following:
    		```
    		@import 'node_modules/bootstrap/scss/bootstrap';
    		@import 'node_modules/bootstrap-vue/src/index.scss';
    		```
    	-	You can create & import partials into this file or add additional global styles using scss
    	-	Also in your `src` folder, open `main.js` and add the following under the `App import:
    		```
    		import 'bootstrap'
    		import BootstrapVue from 'bootstrap-vue'
    		import './main.scss'

    		Vue.use(BootstrapVue)
    		```
    	-	You now have access to scss and all of bootstrap/bootstrap-vue. Watch the screencast for more information on using bootstrap-vue components and bootstrap features in Vue, as well as turning the bootstrap nav into an app router
    -	To run the project, `cd` into your project and run `npm run serve` or `yarn serve` to launch the server

### **To create your project using Vue CLI v2**

    -	run `vue init webpack my-title`
    -	Follow the prompts:
    	-	Choose 1st option for Vue build (Runtime + Compiler)
    	-	Enter `n` for the router prompt
    	-	Enter `n` for lint and tests
    	-	Select npm or yarn (your choice, but yarn would need to be installed first)
    -	Once done, `cd` into your project
    - 	Installing scss (in your project directory)
    	-	npm command: run `npm install -D sass-loader sass`
    	-	yarn command: run `yarn add sass-loader sass`
    -	Installing Bootstrap (in your project directory)
    	-	npm command: run `npm install bootstrap-vue bootstrap jquery popper.js`
    	-	yarn command: run `yarn add bootstrap-vue bootstrap jquery popper.js`
    -	Adding bootstrap/scss to the project
    	-	In your `src` folder, create a `main.scss` file
    	-	In that new file, add the following:
    		```
    		@import 'node_modules/bootstrap/scss/bootstrap';
    		@import 'node_modules/bootstrap-vue/src/index.scss';
    		```
    	-	You can create & import partials into this file or add additional global styles using scss
    	-	Also in your `src` folder, open `main.js` and add the following under the `App` import:
    		```
    		import 'bootstrap'
    		import BootstrapVue from 'bootstrap-vue'
    		import './main.scss'

    		Vue.use(BootstrapVue)
    		```
    	-	You now have access to scss and all of bootstrap/bootstrap-vue. Watch the screencast for more information on using bootstrap-vue components and bootstrap features in Vue, as well as turning the bootstrap nav into an app router
    -	To run the project, `cd` into your project and run `npm run dev` or `yarn dev` to launch the server

## Refactor Code for Vue

- Use the completed activity code from lesson06 as a reference
-     Convert the previous form to use Vue features as much as possible
- You'll need to add bootstrap for the tooltips
- Use Vue for all interactions of the form as much as possible
- For reference, here are the previous requirements:
  -     In the form, create two buttons
    - One says "click me"
    - The other says "submit"
  -     The submit button should be greyed out and unclickable (the form should not submit).
  -     When you hover over the submit button, a tooltip should appear letting the user know to click the other button.
  -     Once the user clicks on the other button, the submit button should no longer be greyed out; the button should be clickable (the form will submit), and a tooltip should not show when you hover over it.
