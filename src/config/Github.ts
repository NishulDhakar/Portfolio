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

    theme: {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', "#26a641", "#39d353"],
    },

    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

    totalCountLabel: '{{count}} contributions in the last year',
};
