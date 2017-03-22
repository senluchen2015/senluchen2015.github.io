import React from 'react';

const projectsInfo = {
    'divit': {
        title: 'Divit',
        logo: require('static/img/projects/divit/divit-logo.png'),
        intro: <p>Divit is a roommate expense tracking app that automatically clear debts between roommates. With a team from Northwestern University's NuVention, we built both an iOS app and web application using Parse as the backend.
        Press information can be found at <a href="http://www.builtinchicago.org/2014/05/16/student-startup-divit-solving-roommates-peskiest-problem-paying-bills">Built in Chicago</a></p>,
        technology: 'iOS 7 (Objective C), Node.js',
        images: [
            {
                link: require('static/img/projects/divit/overview.png'),
                caption: 'Overview',
            },
            {
                link: require('static/img/projects/divit/add.png'),
                caption: 'Add Expense',
            },
            {
                link: require('static/img/projects/divit/submit.png'),
                caption: 'Submit Payment',
            },
            {
                link: require('static/img/projects/divit/confirmation.png'),
                caption: 'Auto Calculate',
            },
        ],
    },
    'taipei-food': {
        title: 'Taipei Food',
        logo: require('static/img/projects/taipei-food/taipei-food-logo.png'),
        intro: <p>Taipei Food - A Local Guide is a fully offline iOS App that provides recommendations of Taipei's best restaurants. It offers easy to use map and directions for navigation to these restaurants.</p>,
        technology: 'Swift',
        images: [
            {
                link: require('static/img/projects/taipei-food/map.png'),
                caption: 'Offline Map',
            },
            {
                link: require('static/img/projects/taipei-food/list.png'),
                caption: 'Restaurant List',
            },
            {
                link: require('static/img/projects/taipei-food/description.png'),
                caption: 'Detail Description',
            },
            {
                link: require('static/img/projects/taipei-food/address.png'),
                caption: 'Address and Direction',
            },
        ],
        theme: 'dark',
    },
    'habits-reminder': {
        title: 'Habit Reminder',
        logo: require('static/img/projects/habits-reminder/habits-reminder-logo.png'),
        intro: <p>HabitReminder is a simple iOS app that lets user set habit goals and get notified with reminders to follow his or her new habits.</p>,
        technology: 'Swift',
        images: [
            {
                link: require('static/img/projects/habits-reminder/home.png'),
                caption: 'Home Page',
            },
            {
                link: require('static/img/projects/habits-reminder/add.png'),
                caption: 'Add New Habits',
            },
            {
                link: require('static/img/projects/habits-reminder/notification.png'),
                caption: 'Get Notified',
            },
        ],
        theme: 'dark',
    },
    'drink-tallies': {
        title: 'Drink Tallies',
        logo: require('static/img/projects/drink-tallies/drink-tallies-logo.png'),
        intro: <p>DrinkTallies is an iOS app that allows user to plan, tally, record and visualize the number of drinks that the user consumes. The app notifies users to tally up the counts as they drink. This app was a fun way for me to learn Swift.</p>,
        images: [
            {
                link: require('static/img/projects/drink-tallies/plan.png'),
                caption: 'Plan',
            },
            {
                link: require('static/img/projects/drink-tallies/tally.png'),
                caption: 'Tally',
            },
            {
                link: require('static/img/projects/drink-tallies/history.png'),
                caption: 'Record',
            },
            {
                link: require('static/img/projects/drink-tallies/graph.png'),
                caption: 'Visualize',
            },
        ],
        technology: 'Swift',
    },
    projectOrder: ['taipei-food', 'divit', 'habits-reminder', 'drink-tallies'],
};

export default projectsInfo;