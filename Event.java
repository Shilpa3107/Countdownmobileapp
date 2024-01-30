public class Event {
    private String name;   //for storing event names
    private String date;     //for storing event dates
    private String colorScheme;    //for storing the name of the color
    private String backgroundImage;   //for storing the url of the background image

    public String getName() {    
        return name;
    }

    public String getDate() {   
        return date;
    }

    public String getColorScheme() {
        return colorScheme;
    }

    public String getBackgroundImage() {
        return backgroundImage;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setColorScheme(String colorScheme) {
        this.colorScheme = colorScheme;
    }

    public void setBackgroundImage(String backgroundImage) {
        this.backgroundImage = backgroundImage;
    }
}
