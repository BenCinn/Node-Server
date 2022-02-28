# Node-Server

> A simple nodejs server for web development.

### Plugin needed ( + its peer dependencies ) :
- [express](https://www.npmjs.com/package/@nrwl/express)
- [js-sha512](https://www.npmjs.com/package/js-sha512)
- ~~fs~~ (bundled with nodejs)
- [colors](https://www.npmjs.com/package/colors)
- ~~child_process~~ (bundled with nodejs)
- ~~path~~ (bundled with nodejs)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)
- [helmet](https://www.npmjs.com/package/helmet)

### Run the server
You could run the server ( with css prebuilded ) with the command: `npm run start`
or you could run the server without recompiling the css with the command: `npm run run`

### Build the css
You can build the css without running the server again with `npm run build`

## Planned feature
\[[Version 1](https://github.com/BenCinn/Node-Server/milestone/1)\]:
- [ ] \[feature\] Add something to the index page \([#3](https://github.com/BenCinn/Node-Server/issues/3)\)
- [ ] \[feature\] Center the [login page](../blob/main/html/login.html) \([#2](https://github.com/BenCinn/Node-Server/issues/2)\) and [register page](../blob/main/html/register.html) \([#5](https://github.com/BenCinn/Node-Server/issues/5)\)
- [ ] \[vulnerability\] Fix all [XSS in server.js](../main/server.js#L68-L80)
