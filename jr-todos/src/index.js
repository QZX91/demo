require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");

const v1Router = require("./routes");
const logger = require("./utils/logger");
const swaggerJSDoc = require("./utils/swagger");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(
  process.env.NODE_ENV === "production" ? morgan("common") : morgan("dev")
);
app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

app.use(v1Router);

app.listen(PORT, () => {
  logger.debug(`server listening on port ${PORT}`);
});
