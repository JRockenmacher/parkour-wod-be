const data = [{
  id: 1,
  name: 'Demon Burpee',
  description: 'Find a wall a little taller than head height. Facing the wall, drop down and perform a burpee, but on the jump, jump into cat hang on wall, and perform a climb up. Drop back into a cat hang before dropping to the ground. Once feet touch the ground, 1 rep is completed',
  demo: 'https://www.youtube.com/watch?v=1yFNZAKLUaE',
  target_1: 'full-body',
  target_2: null,
  mType: 'compound',
  skill_level: 'intermediate',
  $equipment: false,
  weights: false,
  partner: false,
  approved: true
}, {
  id: 2,
  name: 'Broad Jump',
  description: 'From a standing position, punch up and forward, extending whole body. Snap up at the hip driving legs up, then out in front of you, extending them to land. Land strongly with as little sound possible.',
  demo: 'https://www.youtube.com/watch?v=7HogPWl3qqg',
  target_1: 'lower-body',
  target_2: 'core',
  mType: 'dynamic',
  skill_level: 'beginner',
  $equipment: false,
  weights: false,
  partner: false,
  approved: true
}, {
  id: 3,
  name: 'Front-Lever',
  description: 'Begin at the top of a pull-up position or in a dead hang. Push yourself out and away from the bar, or draw your body parallel to the ground from the shoulders, bringing hips in line with the shoulders. Belly should be drawn in slightly, pushing through the sitz bones, and shoulder blades pulling towards each other. Use whatever progression to allow for a 20 second minimum hold.',
  demo: 'https://www.youtube.com/watch?v=NicnELGtOSE',
  target_1: 'upper-body',
  target_2: 'core',
  mType: 'hold',
  skill_level: 'intermediate',
  $equipment: false,
  weights: false,
  partner: false,
  approved: true
}, {
  id: 4,
  name: 'Shoulder Dislocates',
  description: 'With a piece of pvc or broom handle, with your arms straight, bring the bar from the hips and around to the lower back. Try to not bend at the elbow and increase grip-width, till the exercise is just able to be performed without excessive bending at the elbow',
  demo: 'https://www.youtube.com/watch?v=5vkeGGuwqys',
  target_1: 'upper-body',
  target_2: null,
  mType: 'mobility',
  skill_level: 'beginner',
  $equipment: false,
  weights: false,
  partner: false,
  approved: true
}
// {
  // id: ,
  // name: '',
  // description: '',
  // demo: '',
  // target_1: '',
  // target_2: null,
  // mType: '',
  // skill_level: '',
  // $equipment: false,
  // weights: false,
  // partner: false,
  // approved: true
// }
]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movements').del()
    .then(function () {
      // Inserts seed entries
      return knex('movements').insert(data)
    })
    .then(knex.raw(`ALTER SEQUENCE movements_id_seq RESTART WITH ${data.length + 1}`))
}
// better naming convention for quick finding seeds for different tables