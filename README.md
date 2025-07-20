skip to actual readme under line made of /////'s if in a rush as at this time i was under the illusion of needing a server though some info is still relevant such as minimal error logging,the loading guard and http codes
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

So far this has been extremely difficult due to errors ive not encountered prior to this such as tenant not recognised regarding linking the database,after an eventual creation of 2 new tables this wasnt an issue so im not even sure now what happened,i need to learn how to set up servers alot more efficiently and in general. ive had parsing issues so have ended up having to specify in one line via headers that its actually json im parsing.

for my postpage i had to implement a loading guard with a placeholder message until the post content is available in the form of "if (!post) return Loading post...;" otherwise it would throw an error at me via the error display module stating "Cannot read properties of undefined (reading 'title')" due to how ive done things im guessing, the mentioned module is the module that comes with default nextjs project pages, the same one ive been unable to find out how to get rid of but also am a big fan of for error log reasons.

in regards to other error logging ive kept it relatively minimal due to not having a mass of knowledge on implementation and being overwhelmed by mass log spam. at the minute it extends as far as lines like "res.status(201).json(result.rows[0]);" which set the http status and display a response,in this instance it sets the response to 201 essentially meaning youve created something,.json(result.rows[0]) however sends back the first row of the query result as a JSON response body,perhaps this could be considered success logging?
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

so the majority of my above prior readme was actually pointless as i managed to put myself under the illusion of a server being a requirement,ive now broken it down into a state where vercel can actually hopefully deal with it. lesson learnt always read instructions multiple times.i ended up making multiple of the same files and getting issues.

the minimal error logging ive done still remains,ive restructured things to be less of a pain on the eyes tree-wise.
