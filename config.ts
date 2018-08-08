// tslint:disable-next-line:no-var-requires
require("dotenv").config();

export default {
  channels: [ `${process.env.CHANNEL}` ],
  identity: {
    username: `${process.env.USERNAME}`,
    // tslint:disable-next-line
    password: `${process.env.PASSWORD}`
  },
};
