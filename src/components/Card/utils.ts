import moment from 'moment';

const spaceLink = (id: string) => {
    return `https://twitter.com/i/spaces/${id}`;
};

const scheduledDate = (scheduleDate: string): string => {
    const date = new Date(scheduleDate);
    return moment(date).utc().format('YYYY MMM ddd  HH:mm');
};

const getCorrectSizeImage = (imageUrl: string): string => {
    let url = imageUrl.toString().replace(/normal/g, '400x400');

    return url;
};

export { spaceLink, scheduledDate, getCorrectSizeImage };
