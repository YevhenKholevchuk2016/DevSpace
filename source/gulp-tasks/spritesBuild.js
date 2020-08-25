import {src, dest} from 'gulp';
import pump from 'pump';
import svgSprite from 'gulp-svg-sprite';

export default function spritesBuild(cb, inputSvg, outputSvg, svgSymbols) {
	return pump([
		src(inputSvg),
		svgSprite({
			shape: {
				id: {
					generator: name => {
						return `icon-${name.slice(0, -4)}`;
					}
				}
			},
			mode: {
				symbol: {
					dest: ".",
					sprite: svgSymbols,
					example: true
				}
			},
			transform: [
				{
					svgo: {
						plugins: [
							{
								removeViewBox: false
							},
							{
								removeTitle: true
							}
						]
					}
				}
			]
		}),
		dest(outputSvg)
	], cb);
}