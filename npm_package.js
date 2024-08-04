

const app = express();
app.get("/", (_req, res) => {
  res.send("Deno server");
});
app.listen(3000, () => {
  console.log("serving running on port 3000");

});