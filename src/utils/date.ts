import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import './date-locale/en';

dayjs.extend(relativeTime);
dayjs.extend(utc);

export function fromNow(time: string) {
  return dayjs(time).utc().locale('en').fromNow();
}