using DB_initializer.Model;
using System.Collections.Generic;

namespace DB_initializer.Job
{
    public interface IImportJson
    {
        JsonResponse GetSpreadsheets();
    }
}
