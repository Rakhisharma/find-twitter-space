import moment from 'moment';

const spaceLink = (id: string) => {
    return `https://twitter.com/i/spaces/${id}`;
};

const scheduledDate = (scheduleDate: string): string => {
    if (!scheduleDate) return 'Not scheduled yet';
    const date = new Date(scheduleDate);
    const schedule = moment(date).utc().format('YYYY MMM ddd  HH:mm');
    return `${schedule} UTC`;
};

const getCorrectSizeImage = (imageUrl?: string): string => {
    if (!imageUrl)
        return 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png';

    let url = imageUrl.toString().replace(/normal/g, '400x400');

    return url;
};

export { spaceLink, scheduledDate, getCorrectSizeImage };
