package filmes;

public class FilmesTestDrive {
    public static void main(String[] args) {
        Filme filme1 = new Filme();
        filme1.title = "Green Book";
        filme1.genre = "Drama";
        filme1.rating = 6;

        System.out.println("O melhor filme do mundo é " + filme1.title);
    }
}