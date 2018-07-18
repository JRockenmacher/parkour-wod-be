const data = [{
  id: 1,
  name: 'Burpee Exorcist',
  description: '5 RFT: \n10x Demon Burpees resting 1 min between rounds.\nRecord total time',
  wType: 'power',
  target_1: 'full-body',
  target_2: null,
  mType: 'compound',
  $equipment: false,
  weights: false,
  partner: false,
  approved: true
}, {
  id: 2,
  name: 'Lever Practice',
  description: 'for 10-20 minutes, practice Front and/or Back Lever progressions, Ice Cream Makers, Skin The Cat',
  wType: 'skill/strength',
  target_1: 'upper-body',
  target_2: 'core',
  mType: 'hold',
  $equipment: false,
  weights: false,
  partner: false,
  approved: true
}, {
  id: 3,
  name: 'Eva',
  description: '5 RFT: run or row 800m, 30x kb swings(52/35), 30x pull-ups',
  wType: 'power',
  target_1: 'upper-body',
  target_2: 'lower-body',
  mType: 'compound',
  $equipment: true,
  weights: true,
  partner: false,
  approved: true
}, {
  id: 4,
  name: 'Murph',
  description: 'With a running stopwatch, run 1 mile, then perform: 100x pull-ups, 200x pushups, 300 squats. Then run 1 mile. Cut-off time is 1hr.',
  wType: 'endurance',
  target_1: 'compound',
  target_2: null,
  mType: 'dynamic',
  $equipment: false,
  weights: false,
  partner: false,
  approved: true
}, 
// {
//   id: ,
//   name: '',
//   description: '',
//   wType: '',
//   target_1: '',
//   target_2: '',
//   mType: '',
//   $equipment: false,
//   weights: false,
//   partner: false,
//   approved: true
// }
]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert(data)
    })
    .then(knex.raw(`ALTER SEQUENCE movements_id_seq RESTART WITH ${data.length + 1}`))
}
