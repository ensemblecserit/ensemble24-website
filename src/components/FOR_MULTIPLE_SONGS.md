# in Popups.jsx

```jsx
<button className="btn popup-cont popup-dir-invert" onClick={handleNext}>
  <span className="popup-element">Forward</span>
  <StepForward size={size} />
</button>
```

```jsx
// Function to handle moving to the next song if is not playing play first.
const handleNext = () => {
  if (!isPlaying) toggle();
  else setSong();
};
```

```jsx
  // setting songs
  // State variables for managing audio playback
  const [audio, setAudio] = useState<HTMLAudioElement>(); // Holds the current audio element
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Indicates whether audio is playing
  const [current, setCurrent] = useState<number>(-2); // Stores the current song index (-2 for initial state)

  // Function to handle loading and starting a new song
  const setSong = async () => {
    audio?.pause(); // Pause the current audio if any
    if (isPlaying) setIsPlaying(false); // Update playing state

    // Determining the next song index
    let temp;
    if (current === -2)
      temp = -1; // If initial state, set to -1 for first song
    else temp = current === songs.length - 1 ? -1 : current; // If last song, loop back to -1

    let aud = new Audio(songs[temp + 1]); // Create a new Audio object for the next song
    if (current !== -2) {
      // If not initial state, Set playing state & start audio
      setIsPlaying(true);
      await aud.play();
    }

    setCurrent(temp + 1); // Update the current song index
    setAudio(aud); // Set the new audio element in state
  };

  // Initial effect for playing the first song
  // If initial state, load and play the first song
  useEffect(() => {
    if (current === -2) setSong();
  }, []);
```
