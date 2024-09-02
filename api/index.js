import express from "express";
import cors from "cors"
import useRoutes from "./routers/bookRouter.js"

const app = express()
const PORT = 3331

app.use(cors())
app.use(express.json())

app.use("/", useRoutes)

app.listen(PORT, () => {
    console.log(`Servidor on PORT ${PORT}🟢`)
})