const prisma = require('../prismaClient');

const getAllReaders = async () => {
    return await prisma.reader.findMany();
};

const createReader = async (name, email) => {
    return await prisma.reader.create({
        data: {
            name,
            email,
        },
    });
};

const getReaderBooks = async (readerId) => {
    return await prisma.book.findMany({
        where: { readerId },
    });
};

const assignBookToReader = async (readerId, title, author) => {
    const book = await prisma.book.create({
        data: {
            title,
            author,
            readerId,
        },
    });

    return await prisma.reader.findUnique({
        where: { id: readerId },
        include: { books: true },
    });
};

module.exports = {
    getAllReaders,
    createReader,
    getReaderBooks,
    assignBookToReader,
};
