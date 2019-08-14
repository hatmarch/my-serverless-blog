// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

const preferDefault = m => (m && m.default) || m;
exports.wrapRootElement = preferDefault(require(`./wrap-with-provider`));