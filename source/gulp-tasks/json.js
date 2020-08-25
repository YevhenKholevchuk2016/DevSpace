import {src, dest} from 'gulp';
import pump from 'pump';

export default function json(cb, inputJson, outputJson) {
	return pump([
		src(inputJson),
		dest(outputJson)
	], cb);
}