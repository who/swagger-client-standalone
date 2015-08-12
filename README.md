# swagger-client-standalone

This tool provides a way to generate swagger-js clients for environments where UMD js is required. Swagger-js, a swagger spec file, and all dependencies are bundled into one output file.

```
  Usage: swagger-client-standalone [options]

  Options:

    -h, --help                    output usage information
    -V, --version                 output the version number
    -m, --moduleName [value]      Main UMD module name to use. Defaults to SwaggerClientStandalone
    -o, --outfile <path>          Output file for the generated standalone bundle
    -s, --swaggerSpecPath <path>  Full path of the Swagger spec json file. Defaults to ./swagger.json
```
