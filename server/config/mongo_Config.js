const mongoose = require('mongoose');


main()
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.monngo_connection);

}
mongoose.set('bufferCommands', false);