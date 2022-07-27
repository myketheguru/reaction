import create from 'zustand'


const useStore = create((set) => ({
  loading: false,
  isLoggedIn: false,
  devices: [],
  setLoading: (isLoading) => set((state) => ({ loading: isLoading })),
  setLoggedIn: (isLoggedIn) => set((state) => ({ isLoggedIn })),
  setDevices: (devices) => set((state) => ({ devices })),
}))

export default useStore