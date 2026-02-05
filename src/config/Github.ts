export const githubConfig = {
    username: 'nishuldhakar',

    // FIXED API
    apiUrl: 'https://github-contributions-api.deno.dev',

    title: 'Github Activity',
    subtitle: 'contributions',

    loadingState: {
        description: 'Loading GitHub data...',
    },
    errorState: {
        title: 'Unable to load GitHub data',
        description: 'We could not fetch the latest contribution data from GitHub.',
        buttonText: 'Visit GitHub Profile',
    },

    fontSize: 14,
    maxLevel: 4,

    // theme: {
    //     light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    //     dark: ['#161b22', '#0e4429', '#006d32', "#26a641", "#39d353"],
    // },
    theme: {
        light: ['#ebedf0', '#ced4da', '#adb5bd', '#6c757d', '#212529'],
        dark: ['#161b22', '#343a40', '#6c757d', '#adb5bd', '#ced4da'],
    },
    // theme: {
    //     light: ['#ebedf0', '#ced4da', '#adb5bd', '#6c757d', '#343a40'],
    //     dark: ['#161b22', '#343a40', '#6c757d', '#adb5bd', '#ced4da'],
    // },

    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

    totalCountLabel: '{{count}} activities in 2025',
};
