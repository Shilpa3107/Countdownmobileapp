public class Event {
    private String name;   //for storing event names
    private String date;     //for storing event dates
    private String colorScheme;    //for storing the name of the color
    private String backgroundImage;   //for storing the url of the background image

    //getter methods

    public String getName() {       //getting event name
        return name;   
    }

    public String getDate() {        //getting event date
        return date;
    }

    public String getColorScheme() {      //getting color scheme
        return colorScheme;
    }

    public String getBackgroundImage() {       //getting backgroung image url
        return backgroundImage;
    }

     //setter methods   

    public void setName(String name) {         //storing event name to event variable
        this.name = name;
    }

    public void setDate(String date) {         //storing date name to date variable
        this.date = date;
    }

    public void setColorScheme(String colorScheme) {        //storing color scheme to colorSCheme variable
        this.colorScheme = colorScheme;
    }

    public void setBackgroundImage(String backgroundImage) {     //storing background image url to baackgroundImage variable
        this.backgroundImage = backgroundImage;
    }
}
