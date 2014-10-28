'use strict';
(function() {
var dates = [],
    monthNameByNum = [],
    soNew = {},
    soAbs = {},
    soNorm = {},
    ghStarsNew = {},
    ghStarsAbs = {},
    ghStarsNorm = {},
    colorByFr = {},
    soAbsByTag = {},
    soNormByTag = {},
    ghStarsAbsByTag = {},
    ghStarsNormByTag = {},
    month, year, frameworks, tags;



/* FRAMEWORKS */

frameworks = [
  'Angular',
  'Backbone',
  'Ember',
  'Famous',
  'Flight',
  'Flux',
  'Ionic',
  'Knockout',
  'Marionette',
  'Meteor',
  'Om',
  'Polymer',
  'React',
  'jQuery',
  'Dojo',
  'ExtJS'
  //'Ampersand',
];


/* TAGS */
tags = {
  'binding': {
    'binding/twoWay': [
      'angular', 'ember', 'polymer', 'knockout', 'ionic', 'om'
    ],
    'binding/oneWay': ['backbone', 'marionette']
  },

  'model': {
    'model/mv*': [
      'angular',
      'ember',
      'knockout',
      'meteor',
      'marionette',
      'ionic'
    ],
    'model/component': ['react', 'polymer', 'om', 'flight'],
    'model/flux': ['flux']
  },

  'templates': {
    'templates/string': ['ember', 'backbone', 'marionette'],
    'templates/dom': [
      'angular',
      'polymer',
      'knockout',
      'react',
      'meteor'
    ]
  },

  'focus': {
    'focus/monolythic': [
      'meteor',
      'angular', 'ember',
      'backbone', 'marionette'
    ],
    'focus/focused': [
      'react',
      'polymer',
      'knockout',
      'flight',
      'flux',
      'om'
    ],
  },

  'support': {
    'support/billion-dollar-company': [
      'polymer',
      'angular',
      'react',
      'flux',
      'flight'
    ],

    'support/community': [
      'knockout',
      'om',
      'ionic',
      'backbone',
      'ember',
      'marionette'
    ],

    'support/investments': [
      'famous',
      'meteor'
    ]
  },

  'side': {
    'side/isomorph': ['meteor', 'react', 'om'],
    'side/polymorph': [
      'angular',
      'backbone',
      'ember',
      'knockout',
      'ember',
      'marionette',
      'flight',
    ]
  },

  'wave': {
    'wave/1': ['knockout', 'backbone'],
    'wave/2': [
      'ember',
      'meteor',
      'angular',
      'marionette'
    ],
    'wave/3': [
      'flight',
      'react',
      'polymer'
    ]
  },

  'mob-desk': {
    'mob-desk/mobile': ['famous', 'ionic'],
    'mob-desk/desktop': [
      'angular',
      'react',
      'flux',
      'om',
      'knockout',
      'ember',
      'marionette',
      'meteor',
      'polymer'
    ]
  }
};


/* COLORS */
colorByFr.Polymer = '#FE6599';
colorByFr.Angular = '#DD1B16';
colorByFr.Knockout = '#2b6525';
colorByFr.React = '#61DAFB';
colorByFr.Backbone = '#0071B5';
colorByFr.Ember = '#B9824C';
colorByFr.Meteor = '#000000';


/* DATES */
monthNameByNum = [
  null,
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];


for (year = 2008; year <= 2014; year++) {
  for (month = 1; month <= 12; month++) {
    if (year === 2014 && month === 10) {
      break;
    }
    dates.push(monthNameByNum[month] + ' ' + year);
  }
}

/* StackOverflow */
soNew.jquery = [
  0, 0, 0, 0, 0, 0, 0, 27, 135, 256, 264,
  256, 380, 496, 572, 701, 939, 1160, 1381,
  1603, 1625, 1793, 1806, 1894, 2332, 2322,
  2880, 2752, 2793, 3082, 3544, 3803, 3691,
  3801, 4104, 4277, 4896, 5064, 6288, 6254,
  6613, 6548, 7163, 7652, 7030, 7039, 7338,
  7284, 8050, 8674, 9067, 8754, 9541, 9253,
  9874, 10065, 8956, 9842, 9788, 8987, 10517,
  10328, 11763, 11608, 11130, 10875, 11873,
  11979, 12085, 13566, 12831, 12167, 14101,
  14021, 14985, 14043, 12375, 11256, 12013,
  11495, 11132
];

soNew.extjs = [
  0, 0, 0, 0, 0, 0, 0, 0, 8,
  9, 5, 4, 10, 13, 15, 13, 14,
  19, 23, 24, 32, 33, 41, 32, 57,
  50, 73, 52, 49, 71, 85, 98, 89,
  129, 119, 150, 133, 207, 264,
  267, 290, 239, 229, 239, 291, 220,
  266, 199, 232, 266, 309, 334, 404,
  371, 370, 385, 336, 333, 317, 302,
  331, 383, 350, 322, 338, 448, 462,
  448, 364, 414, 404, 376, 454, 423,
  445, 382, 387, 363, 365, 328, 362
];

soNew.dojo = [
  0, 0, 0, 0, 0, 0, 0, 2, 7, 6,
  15, 5, 20, 7, 15, 9, 17, 16, 38,
  45, 48, 46, 43, 52, 60, 47, 59, 36,
  49, 52, 45, 31, 38, 51, 58, 73, 55,
  56, 91, 92, 100, 113, 125, 129, 123,
  112, 111, 99, 128, 135, 151, 142, 165,
  154, 128, 158, 111, 171, 130, 108, 144,
  143, 159, 170, 108, 150, 222, 169, 174,
  195, 161, 132, 182, 147, 143, 137, 154,
  118, 143, 125, 120
];


soNew.backbone = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 11,
  7, 26, 36, 53, 84, 80, 104, 142, 163,
  197, 192, 256, 260, 337, 317, 346, 412,
  472, 474, 470, 366, 431, 363, 438, 553,
  553, 526, 485, 525, 457, 516, 544, 468,
  491, 506, 425, 509, 532, 519, 489, 401,
  365, 404, 333, 306
];


soNew.angular = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 1, 0, 2, 1, 2, 3, 1, 1,
  1, 3, 7, 10, 33, 74, 97, 174, 187, 287,
  303, 343, 602, 679, 913, 1113, 1233, 1246,
  1639, 1904, 1945, 2266, 2273, 2186, 2965, 3241,
  3750, 3729, 3783, 3886, 4584, 4448, 4579
];


soNew.ember = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 3, 31, 54, 89, 126, 118,
  124, 136, 175, 190, 207, 166, 169,
  200, 344, 401, 458, 425, 365, 299,
  495, 529, 538, 480, 462, 470, 435,
  501, 543, 574, 536, 565, 531, 570, 504,
];


soNew.knockout = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5,
  14, 11, 12, 16, 18, 29, 42, 44, 65,
  77, 60, 78, 100, 109, 170, 209, 189,
  226, 244, 253, 274, 218, 314, 332, 306,
  381, 381, 455, 487, 430, 421, 422, 363,
  365, 422, 419, 396, 416, 439, 389, 369,
  365, 322, 300, 322, 284
];


soNew.meteor = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 129, 87,
  61, 64, 81, 37, 89, 108, 111,
  184, 164, 220, 180, 179, 207,
  221, 235, 171, 212, 242, 285,
  343, 325, 428, 359, 353, 312,
  348, 390, 472
];


soNew.polymer = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 3, 24, 29, 11, 14, 12, 20,
  23, 58, 66, 70, 81, 264, 195, 157
];


soNew.react = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 2, 1, 1, 9,
  5, 7, 21, 45, 46, 45, 35,
  65, 63, 77, 72, 96
];


soNew.flight = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 3, 0, 1,
  0, 3, 0, 0, 0, 0, 1, 1,
  1, 1, 0, 1, 1, 1, 0, 0,
  2
];


soNew.ampersand = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 2, 1
];


soNew.famous = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 35, 76,
  66, 37, 42, 25
];


soNew.ionic = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 6, 9, 33, 52, 54, 86,
  100, 156, 179
];


soNew.marionette = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 2, 1,
  3, 17, 35, 38, 41, 23, 28,
  23, 28, 35, 41, 56, 56, 76,
  66, 90, 75, 75, 77, 82, 46,
  74, 78, 75, 66, 53, 49, 54,
  51, 70
];


soNew.flux = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 5, 0,
  6, 4, 10
];


soNew.om = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 3, 4, 5, 6,
  4, 3, 6
];


/* Github stars */
ghStarsAbs.angular = [
  453, 842, 1296, 2386, 3086, 3774,
  4163, 4597, 5041, 5565, 6355, 7245,
  8140, 9207, 10254, 11225, 12301, 13641,
  14875, 16074, 17386, 18518, 19703,
  21011, 22247, 23279, 24489, 25572,
  26713, 28010, 29316
];


ghStarsAbs.ember = [
  2499, 2757, 3269, 3700, 4079, 4397,
  4620, 4845, 5045, 5287, 5574, 6075,
  6497, 6859, 7134, 7384, 7625, 7904,
  8316, 8539, 8784, 9015, 9251, 9492,
  9747, 10043, 10341, 10620, 10891,
  11157, 11348
];


ghStarsAbs.react = [
  1115, 1633, 1799, 1988, 2165,
  2389, 2676, 3619, 4549, 5002,
  5470, 5987, 6948, 7395, 8134,
  8704, 9370
];


ghStarsAbs.backbone = [
  7171, 7837, 8448, 9034, 9688, 10214,
  10603, 11029, 11415, 11878, 12405,
  12834, 13450, 13908, 14350, 14736,
  15158, 15508, 15808, 16096, 16348,
  16643, 16933, 17189, 17507, 17824,
  18141, 18452, 18690, 18984, 19226
];


ghStarsAbs.knockout = [
  1672, 1843, 2038, 2216, 2392,
  2542, 2661, 2804, 2948, 3050,
  3174, 3341, 3479, 3639,
  3759, 3868, 4011, 4124, 4211,
  4315, 4407, 4484, 4577, 4685,
  4806, 4902, 5027, 5144, 5258,
  5399, 5492
];


ghStarsAbs.meteor = [
  13, 3016, 3615, 3990, 4807, 5308,
  5538, 5921, 6225, 6763, 7188, 7536,
  8017, 8339, 8650, 8989, 9278, 9532,
  9769, 10153, 10562, 10920, 11248,
  11557, 11961, 12348, 12651, 16955,
  17625, 18239, 18805
];


ghStarsAbs.polymer = [
  1503, 1760, 1967, 2198, 2468,
  2722, 2935, 3106, 3296, 3563,
  3847, 4084, 4428, 4993, 5445,
  5791, 6026
];


ghStarsAbs.ionic = [
  1656, 2404, 2853, 3547, 4392,
  5012, 6248, 6862, 7905, 8900,
  9755
];


ghStarsAbs.flux = [
  1349, 1980, 2265
];


ghStarsAbs.famous = [
  3095, 4480, 4796, 5032,
  5430, 5645
];


ghStarsAbs.flight = [
  4225, 4321, 4396, 4488, 4591,
  4654, 4860, 4988, 5139, 5248,
  5311, 5384, 5431, 5507, 5588
];


ghStarsAbs.marionette = [
  1377, 1541, 1697, 1836, 2049,
  2308, 2563, 2866, 3046, 3239,
  3427, 3621, 3775, 3937, 4114,
  4258, 4448, 4568, 4693, 4820,
  4955, 5085, 5227, 5338, 5452
];


ghStarsAbs.om = [
  964, 1475, 1655, 1821, 1980,
  2188, 2342, 2458, 2606, 2757
];


ghStarsAbs.jquery = [];
ghStarsAbs.dojo = [];
ghStarsAbs.extjs = [];

Object.keys(ghStarsAbs).forEach(function(framework) {
  //var min = ghStarsAbs[framework][0];
  while (ghStarsAbs[framework].length !== soNew[framework].length) {
    ghStarsAbs[framework].unshift(0);
  }
});


/* AGREGATE */
frameworks.forEach(function(fr) {
  var frLower = fr.toLowerCase();

  ghStarsNorm[frLower] = _normArray(ghStarsAbs[frLower]);
  ghStarsNew[frLower] = _newArray(ghStarsAbs[frLower]);

  soAbs[frLower] = _absArray(soNew[frLower]);
  soNorm[frLower] = _normArray(soAbs[frLower]);
});


Object.keys(tags).forEach(function(category) {
  Object.keys(tags[category]).forEach(function(tag) {
    var soSumArr = [], ghStarsSumArr = [];

    tags[category][tag].forEach(function(fr) {
      soSumArr = _sumArray(soSumArr, soAbs[fr]);
      ghStarsSumArr = _sumArray(ghStarsSumArr, ghStarsAbs[fr]);
    });

    soAbsByTag[tag] = soSumArr;
    soNormByTag[tag] = _normArray(soSumArr);

    ghStarsAbsByTag[tag] = ghStarsSumArr;
    ghStarsNormByTag[tag] = _normArray(ghStarsSumArr);
  });

});



/* Exports */
window.DATES = dates;
window.TAGS = tags;

window.FRAMEWORKS = frameworks;
window.COLOR_BY_FRAMEWORK = colorByFr;

window.STACK_OVERFLOW_NEW = soNew;
window.STACK_OVERFLOW_ABS = soAbs;
window.STACK_OVERFLOW_NORM = soNorm;

window.GITHUB_NEW_STARS = ghStarsNew;
window.GITHUB_ABS_STARS = ghStarsAbs;
window.GITHUB_NORM_STARS = ghStarsNorm;

window.STACK_OVERFLOW_ABS_BY_TAG = soAbsByTag;
window.STACK_OVERFLOW_NORM_BY_TAG = soNormByTag;

window.GITHUB_ABS_BY_TAG = ghStarsAbsByTag;
window.GITHUB_NORM_BY_TAG = ghStarsNormByTag;

function _absArray(arr) {
  return arr.reduce(function(r, val) {
    if (r.length === 0) {
      r.push(val);
      return r;
    }

    r.push(val + r[r.length - 1]);
    return r;
  }, []);
}


function _normArray(arr) {
  return arr.reduce(function(r, val) {
    var prev, growth;

    if (r.length === 0) {
      prev = 0;
    } else {
      prev = arr[r.length - 1];
    }

    if (prev <= 0) {
      r.push(0);
      return r;
    }

    growth = Math.floor((val - prev) * 100 / prev);
    r.push(growth);
    return r;
  }, []);
}


function _newArray(arr) {
  return arr.reduce(function(r, val) {
    if (r.length === 0) {
      r.push(0);
      return r;
    }

    var old = arr[r.length - 1];

    if (old <= 0) {
      r.push(0);
      return r;
    }

    r.push(val - old);
    return r;
  }, []);
}

})();


function _sumArray(arr1, arr2) {
  var len = arr1.length,
      res = [],
      i;

  if (arr2.length > len) {
    len = arr2.length;
  }

  for (i = 0; i < len; i++) {
    res[i] = (arr1[i] || 0) + (arr2[i] || 0);
  }

  return res;
}


function _smooth(arr) {
  var result = [], prev, i;
  prev = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      prev = arr[i];
      result.push(prev);
      continue;
    }

    result.push(prev);
  }

  return result;
}
