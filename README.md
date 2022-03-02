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
- [ ] ![feature](https://labl.es/svg?text=enhancement&bgcolor=a2eeef) Add something to the index page \([#3](https://github.com/BenCinn/Node-Server/issues/3)\)
- [x] [![enhancement](https://labl.es/svg?text=feature&bgcolor=a2eeef)](https://github.com/BenCinn/Node-Server/issues?q=is%3Aissue+label%3Avulnerability) Center the [login page](../main/html/login.html) \([#2](https://github.com/BenCinn/Node-Server/issues/2)\) and [register page](../main/html/register.html) \([#5](https://github.com/BenCinn/Node-Server/issues/5)\)
- [ ] [![vulnerability](https://labl.es/svg?text=vulnerability&bgcolor=5B1026)](https://github.com/BenCinn/Node-Server/issues?q=is%3Aissue+label%3Avulnerability) Fix **all** [XSS in server.js](../main/server.js#L68-L80) \(~~[#6](https://github.com/BenCinn/Node-Server/issues/6), [#7](https://github.com/BenCinn/Node-Server/issues/7),~~ [#11](https://github.com/BenCinn/Node-Server/issues/11)\)
- [ ] [![vulnerability](https://labl.es/svg?text=vulnerability&bgcolor=5B1026)](https://github.com/BenCinn/Node-Server/issues?q=is%3Aissue+label%3Avulnerability)
 Denial-of-Service (Memory Allocation Problems) ([#9](https://github.com/BenCinn/Node-Server/issues/9) and [#10](https://github.com/BenCinn/Node-Server/issues/10)\)
