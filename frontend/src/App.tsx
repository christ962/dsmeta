import NotificationButton from "./components/NotificationButton"
import Headers from "./components/Headers"
import SalesCard from "./components/SalesCard"
function App() {
  return (
    <>
      <Headers />

      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />

          </div>
        </section>
      </main>
    </>
  )
}

export default App
