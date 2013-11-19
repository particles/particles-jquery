
module.exports = {
  __module: {
    provides: ["register_assets_dir"]
  },

  exports: {
    scripts: {
      all: "lib/jquery/jquery.js"
    }
  },

  register_assets_dir: function() {
    return __dirname + "/../../assets";
  }
};