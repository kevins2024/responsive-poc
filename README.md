# Responsive Single Page Application research project and proof of concept

# Notes
- A lot of people seem to rely on Tailwind CSS for this but my initial reading suggests learning an entire new (to me) framework is not the best use of time, nor the most portable to other existing projects.
- Cell phone screens are getting to be very high resolution. Using a media query asking for resolution or setting breakpoints based on pixels seem like it is not going to be effective. For example, many laptop screens are 1080 or 1280 pixels wide while many cell phones are 1170 and higher. A media query shouldn't work in this case, but from what I have read the actual browser on the device will scale a pixel of content to use multiple hardware pixels so the view is more user friendly. In essence, the media query will not get the actual viewport pixel count but the scaled pixel count. This will be tested in this poc.
- Mobile first CSS approach is often suggested but rarely does anyone say why. The only reason I have found is that mobile devices have lower computer power and therefore should receive their instructions first and not have to use cycles implementing overridden styles. 
