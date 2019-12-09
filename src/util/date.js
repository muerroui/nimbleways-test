import moment from 'moment';

export function daysDiffTwoDates(startDate, endDate) {
    return moment(endDate).diff(moment(startDate), 'days');
}