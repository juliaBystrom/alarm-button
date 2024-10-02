# alarm-button

## Customize the button
### Change the text
Go to the `constants.js` file and change the following constans:

```
ALARM_TEXT = Text on the alarm button
SUBTEXT = Text below the alarm button
HEARTH_TEXT = Text on the hearth shown when the button is not pressed. Max 4 characters. Leave as empty string for no text.
```

### Change the audio
Put a mp3 file (around 1 second) in the `public` folder. Rename it to `audio_file.mp3`.


##  Run the app locally
1. Clone the repository
2. Run `npm install`
3. Run `npm dev`
4. Open `http://localhost:5173/` in your browser