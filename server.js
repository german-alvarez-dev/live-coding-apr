const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

// routing
app.use('/api', require('./routes/AppRoutes'))


const PORT = process.env.PORT || 5005
app.listen(PORT, () => console.log(`Servidor levantado en puerto ${PORT}`))