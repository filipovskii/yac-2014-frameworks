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
    month, year, frameworks, tags;



/* FRAMEWORKS */

frameworks = [
  'Ember',
  'Backbone',
  'React',
  'Angular',
  'Meteor',
  'Knockout',
  'Polymer'
];


tags = {
  'binding': {
    'twoWay': ['angular', 'ember', 'polymer', 'knockout'],
    'oneWay': ['backbone']
  },
  'model': {
    'mv*': ['angular', 'ember', 'knockout', 'meteor'],
    'component': ['react', 'polymer']
  },
  'templates': {
    'reactive': ['react', 'meteor']
  }
};

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


for (year = 2010; year <= 2014; year++) {
  for (month = 1; month <= 12; month++) {
    if (year === 2014 && month === 10) {
      break;
    }
    dates.push(monthNameByNum[month] + ' ' + year);
  }
}

/* StackOverflow */
soNew.backbone = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 11,
  7, 26, 36, 53, 84, 80, 104, 142, 163,
  197, 192, 256, 260, 337, 317, 346, 412,
  472, 474, 470, 366, 431, 363, 438, 553,
  553, 526, 485, 525, 457, 516, 544, 468,
  491, 506, 425, 509, 532, 519, 489, 401,
  365, 404, 333, 306
];


soNew.angular = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 1, 0, 2, 1, 2, 3, 1, 1,
  1, 3, 7, 10, 33, 74, 97, 174, 187, 287,
  303, 343, 602, 679, 913, 1113, 1233, 1246,
  1639, 1904, 1945, 2266, 2273, 2186, 2965, 3241,
  3750, 3729, 3783, 3886, 4584, 4448, 4579
];


soNew.ember = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 3, 31, 54, 89, 126, 118,
  124, 136, 175, 190, 207, 166, 169,
  200, 344, 401, 458, 425, 365, 299,
  495, 529, 538, 480, 462, 470, 435,
  501, 543, 574, 536, 565, 531, 570, 504,
];


soNew.knockout = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5,
  14, 11, 12, 16, 18, 29, 42, 44, 65,
  77, 60, 78, 100, 109, 170, 209, 189,
  226, 244, 253, 274, 218, 314, 332, 306,
  381, 381, 455, 487, 430, 421, 422, 363,
  365, 422, 419, 396, 416, 439, 389, 369,
  365, 322, 300, 322, 284
];


soNew.meteor = [
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
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 3, 24, 29, 11, 14, 12, 20,
  23, 58, 66, 70, 81, 264, 195, 157
];


soNew.react = [
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 2, 1, 1, 9,
  5, 7, 21, 45, 46, 45, 35,
  65, 63, 77, 72, 96
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



/* Exports */
window.DATES = dates;

window.STACK_OVERFLOW_NEW = soNew;
window.STACK_OVERFLOW_ABS = soAbs;
window.STACK_OVERFLOW_NORM = soNorm;

window.GITHUB_NEW_STARS = ghStarsNew;
window.GITHUB_ABS_STARS = ghStarsAbs;
window.GITHUB_NORM_STARS = ghStarsNorm;

window.FRAMEWORKS = frameworks;


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

    if (prev === 0) {
      r.push(0);
      return r;
    }

    growth = (val - prev) / prev;
    r.push(growth * 100);
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

    r.push(val - old);
    return r;
  }, []);
}

})();

