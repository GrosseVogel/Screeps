var roleHarvester = require('/roles/role_harvester');

module.exports.loop = function() {
  for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    roleHarvester.run(creep);
  }
}
