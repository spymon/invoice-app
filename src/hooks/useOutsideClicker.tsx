import { useEffect, useRef, useState } from 'react'

// Custom hook for closing the div if it's clicked outside
export const useOutsideClicker = (initialValue: boolean) => {
  // define the ref and set it to the useRef hook with an initial value of null (we are setting type to an HTML div element, can be any HTML tag)
  const ref = useRef<HTMLDivElement>(null)
  // create toggle state, and set the default value to initial value passed in as a prop
  const [visible, setVisible] = useState(initialValue)

  const handleClickOutside = (event: any) => {
    // ref.current && - check if the ref.current has an instance inside because at first is set to null
    // code after && says: if the element we clicked is NOT in the reference we passed in
    // and we use the setVisibility function to set the visible to false
    if (ref.current && !ref.current.contains(event.target)) setVisible(false)
  }

  // we add an event listener to the useEffect to make sure the DOM is loaded
  // we want this to run whenever the ref changes
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true)

    // returning the cleanup function
    return () => {
      // we removeEventListener after the event is over
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [ref])

  // we return an object with the values we created.
  // the ref will be passed to the HTML tag to define the element we want to reference to
  return { visible, setVisible, ref }
}
