const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT || 8080, () => console.log(Up and Running!))