import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class Array {
    public static void main(String[] args) {
        String folderPath = "images/gameIcons/IconList";
        File folder = new File(folderPath);

        if (folder.isDirectory()) {
            File[] files = folder.listFiles(); // get an array of File objects for all files in the folder
            if (files != null) {
                try {
                    FileWriter writer = new FileWriter("output.txt");
                    writer.write("var imageArray = [");
                    for (int i = 0; i < files.length; i++) {
                        if (files[i].isFile()) {
                            String fileName = files[i].getName();
                            if (i == files.length - 1) {
                                writer.write("\"" + fileName + "\"");
                            }
                            else {
                                writer.write("\"" + fileName + "\", ");
                            }
                        }
                    }
                    writer.write("];");
                    writer.close();
                    System.out.println("Successfully wrote to the file.");
                } catch (IOException e) {
                    System.out.println("An error occurred.");
                    e.printStackTrace();
                }
            }
        }
    }
}