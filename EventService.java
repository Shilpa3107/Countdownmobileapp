import org.springframework.stereotype.Service; //importing spring framework
import java.util.ArrayList;
import java.util.List;

@Service 
public class EventService {
    private List<Event> events = new ArrayList<>();

    public List<Event> getAllEvents() {
        return events;
    }

    public void addEvent(Event event) {
        events.add(event);
    }
}
