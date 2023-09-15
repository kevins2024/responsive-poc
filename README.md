# Responsive Single Page Application research project and proof of concept

# Notes

- A lot of people seem to rely on Tailwind CSS for this but my initial reading suggests learning an entire new (to me) framework is not the best use of time, nor the most portable to other existing projects.
- Cell phone screens are getting to be very high resolution. Using a media query asking for resolution or setting breakpoints based on pixels seem like it is not going to be effective. For example, many laptop screens are 1080 or 1280 pixels wide while many cell phones are 1170 and higher. A media query shouldn't work in this case, but from what I have read the actual browser on the device will scale a pixel of content to use multiple hardware pixels so the view is more user friendly. In essence, the media query will not get the actual viewport pixel count but the scaled pixel count. This was tested in this poc and my Galaxy S21, with a screen resolution width of 1080px, tells the app the screen resolution is 360px.
- Mobile first CSS approach is often suggested but rarely does anyone say why. The only reason I have found is that mobile devices have lower computer power and therefore should receive their instructions first and not have to use cycles implementing overridden styles. It does not infer that you should develop mobile apps first then move to tablet, desktop, etc. Rather, we should have the styles that everyone uses at the top of files, then styles mobile will use, then tablet, and so on for performance reasons.
- I don't know if there are different terms but maybe there should be. Developing a site that can adjust from ultrawide desktop width down to mobile phone screen width isn't necessarily a realistic use case. Developing a site that looks differently on each width is. The difference becomes relevant when we discover that CSS rules can easily be changed depending on width, but React doesn't have any built-in way to respond to viewport size changes. If we are happy to ignore the behavior of scaling down the viewport from 2000px to 400px, which is normally very unlikely to happen, then pure CSS is enough. If we need that behavior, we may need to create custom listeners in React that detect width changes so we can adjust accordingly. If that doesn't make sense, consider a site that has 8 nav buttons across the top on desktop. For mobile, these 8 should go into a hamburger menu. It is possible to do with only CSS, I think, but it is much simpler to make that kind of change in the React code and it will have less waste. Doing it in React may need to utilize a debounce to prevent so many rerenders as the resize is happening.
- Master/detail is a normal thing to use for responsive pages with a layout similar to this one. If no one is going to access on mobile, we won't need to worry about it.
- If getting the responsive breakpoints right is too difficult, adding it OS detection may help. For many clients, Android vs Windows may give enough additional information to make layouts very accurate very easily.
